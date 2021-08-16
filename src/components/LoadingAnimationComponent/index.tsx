import { useEffect, useRef } from "react";

import { CreateLoadingAnimation } from "../../animations/CreateLoadingAnimation";
import styles from "./index.module.sass";

export const LoadingAnimationComponent: React.FC = () => {
  // FIXME: stop using any type
  const windowRef: any = useRef(null);
  const imageRef: any = useRef(null);
  const anotherRef = useRef(null);

  const animationTime = 7.5;

  const noScroll = (event: any) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (windowRef.current && imageRef.current && anotherRef.current) {
      CreateLoadingAnimation(windowRef, imageRef, anotherRef, {
        startTime: 0,
        duration: animationTime,
        xCenterPosition:
          windowRef.current.offsetWidth / 2 -
          imageRef.current.offsetLeft -
          imageRef.current.width / 2,
        yCenterPosition:
          windowRef.current.offsetHeight / 2 -
          imageRef.current.offsetTop -
          imageRef.current.height / 2,
      });
    }

    document.addEventListener("touchmove", noScroll, { passive: false });
    document.addEventListener("mousewheel", noScroll, { passive: false });
    setTimeout(() => {
      document.removeEventListener("touchmove", noScroll);
      document.removeEventListener("mousewheel", noScroll);
    }, animationTime * 1000);
  }, [windowRef.current, imageRef.current, anotherRef.current]);

  return (
    <div className={styles.loading_inner}>
      <div className={styles.animation_block} ref={windowRef}>
        <div className={styles.animation_block_inner}>
          <div className={styles.animation_icon_block}>
            <img
              className={styles.animation_icon}
              ref={imageRef}
              src="/triangle.png"
              alt="アンジュのアイコン"
            ></img>
          </div>
          <div className={styles.animation_title_block} ref={anotherRef}>
            <h1 className={styles.animation_title}>
              <p>Loading...</p>
            </h1>
          </div>
        </div>
      </div>
      <div>
        <p>after animation</p>
      </div>
    </div>
  );
};
