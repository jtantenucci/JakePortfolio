import styles from "../../styles/Home.module.css";
import Image from "next/image";

export default function LayerContents({src, alt}) {
  return (
    <>
      <div className={styles.stackBottom}>
        <Image
          src={src}
          alt={alt}
          quality={100}
          width={611.6}
          height={614}
          placeholder="blur"
        />
      </div>
    </>
  );
}
