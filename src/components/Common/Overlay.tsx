import '@/assets/styles/components/Common/Overlay.scss';
import React from 'react';

type Props = {
  isShow: boolean;
  hideOverlay: VoidFunction;
};

const Overlay: React.FC<Props> = ({ children, isShow = false, hideOverlay }) => {
  const handleHideOverlay = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    // ダイアログの外側をクリックしたときのみオーバーレイを非表示にする
    if (event.target === event.currentTarget) hideOverlay();
  };

  if (!isShow) return null;

  return (
    <div className="overlay" onClick={handleHideOverlay} aria-hidden="true">
      {children}
    </div>
  );
};

export default Overlay;
