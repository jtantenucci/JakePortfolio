import intact from "../public/intact-sketch.png";
import highNoon from "../public/highnoon-sketch.png";
import neuehaus from "../public/neuehaus-sketch.png";
import milkman from "../public/milkman-sketch.png";
import laborOfLove from "../public/labor-of-sketch.png";
import soak from "../public/soak-sketch.png";
import sorry from "../public/sorry-sketch.png";
import { ImageListItemBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "material-ui/IconButton";
import InfoIcon from "@material-ui/icons";
import springHours from "../public/springhours-sketch.png";
import vaccine from "../public/vaccine-sketch.png";
import washed from "../public/washed-sketch.png";
import wetmail from "../public/wetmail-sketch.png";
import april from "../public/april-sketch.png";
import Image from "next/image";

const useStyles = makeStyles(() => ({
  icon: {
    color: "black",
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, " +
      "rgba(0,0,0,0.2) 70%, rgba(0,0,0,0) 100%)",
  },
}));

export default function Collages({ styles }) {
  const classes = useStyles();
  return (
    <>
      <div className={styles.stackBottom}>
        <Image
          src={vaccine}
          alt="vaccine"
          quality={100}
          width={611.6}
          height={614}
          placeholder="blur"
        />
      </div>
      <div className={styles.stackTop}>
        <Image
          src={washed}
          alt="washed"
          quality={100}
          width={611.6}
          height={614}
          placeholder="blur"
        />
{/*         <ImageListItemBar
          className={classes.icon}
          title="washed"
          position="top"
          subtitle={<span>by: {"jake lamothe"}</span>}
        /> */}
      </div>
      <div className={styles.stackBottom}>
        <Image
          src={neuehaus}
          alt="neuehaus"
          quality={100}
          width={611.6}
          height={614}
          placeholder="blur"
        />
      </div>
      <div className={styles.stackTop}>
        <Image
          src={springHours}
          alt="springHours"
          width={611.6}
          height={614}
          quality={100}
          placeholder="blur"
        />
      </div>
      <div className={styles.stackBottom}>
        <Image
          src={highNoon}
          alt="highnoon"
          quality={100}
          width={611.6}
          height={614}
          placeholder="blur"
        />
      </div>
      <div className={styles.stackTop}>
        <Image
          src={sorry}
          alt="sorry"
          width={611.6}
          height={614}
          quality={100}
          placeholder="blur"
        />
      </div>
      <div className={styles.stackBottom}>
        <Image
          src={intact}
          alt="intact"
          quality={100}
          width={611.6}
          height={614}
          objectFit="intrinsic"
          placeholder="blur"
        />
      </div>
      <div className={styles.stackTop}>
        <Image
          src={wetmail}
          alt="wetmail"
          quality={100}
          width={611.6}
          height={614}
          placeholder="blur"
        />
      </div>
      <div className={styles.stackBottom}>
        <Image
          src={april}
          alt="april"
          quality={100}
          width={611.6}
          height={614}
          placeholder="blur"
        />
      </div>
      <div className={styles.stackTop}>
        <Image
          src={laborOfLove}
          alt="labor of love"
          quality={100}
          width={611.6}
          height={614}
          objectFit="intrinsic"
          placeholder="blur"
        />
      </div>
      <div className={styles.stackBottom}>
        <Image
          src={milkman}
          alt="milkman"
          quality={100}
          width={611.6}
          height={614}
          placeholder="blur"
        />
      </div>
      <div className={styles.stackTop}>
        <Image
          src={soak}
          alt="soak"
          quality={100}
          width={611.6}
          height={614}
          placeholder="blur"
        />
      </div>
    </>
  );
}
