import { ILoadingOverlayProps } from '../../types/ILoadingOverlayProps';
import styles from './LoadingOverlay.module.css';

export function LoadingOverlay(props: ILoadingOverlayProps) {
  
  const visibility = props.isLoading ? 'hidden' : 'visible';
  const display = props.isLoading ? 'block' : 'none';

  return (
    <div>
      <div
        className={styles.loadingOverlay}
        style={{display: display}}
      >
        <div className={styles.loadingOverlayInner}>
          <div className={styles.loadingOverlayContent}>
            <span className={styles.loadingOverlaySpinner}></span>
          </div>
        </div>
      </div>
      <div style={{visibility: visibility}}>
        {props.children}
      </div>
    </div>
  )
}