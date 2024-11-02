import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/categories", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    console.log('API Response:', data);

    // Ensure the response is an array
    if (!Array.isArray(data)) {
      // If data is wrapped in an object, try to find the array
      const possibleArray = Object.values(data).find(value => Array.isArray(value));
      if (possibleArray) {
        return possibleArray;
      }
      throw new Error('API response is not in the expected array format');
    }

    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return []; // Return empty array as fallback
  }
};

const CategoryList = async () => {
  const data = await getData();

  // Early return with message if no data
  if (!data || data.length === 0) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>Popular Categories</h1>
        <div className={styles.categories}>
          <p>No categories available at the moment.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data.map((item) => (
          <Link
            href={`/blog?cat=${item.slug || 'style'}`}
            className={`${styles.category} ${item.slug ? styles[item.slug] : ''}`}
            key={item._id || crypto.randomUUID()}
          >
            {item.img && (
              <Image
                src={item.img}
                alt={item.title || ''}
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {item.title || 'Unnamed Category'}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;