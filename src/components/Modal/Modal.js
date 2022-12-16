import React, { useContext } from 'react';
import classNames from "classnames"

import SiteContext from "../../SiteContext"

import { Modal } from "semantic-ui-react"

export function GlobalModal(props) {
  const {
    children,
    className,
  } = props

  const { modal, setModalOpen } = useContext(SiteContext)

  const modalClasses = classNames(
    className, 
    "modal",
  )

  return (
      // <div className={overlayClasses} onClick={() => setModalOpen(false)}>
      //   <div className={modalClasses} onClick={e => e.stopPropagation()}>
      //     <Button className="icon-button modal-close" onClick={() => setModalOpen(false)}>
      //       <img src="/icons/close.svg" alt="menu icon" className="icon-small" />
      //     </Button>
          
      //     {children}
      //   </div>
      // </div>
      <Modal
        className={modalClasses}
        basic
        closeIcon
        onClose={() => setModalOpen(false)}
        open={modal}
        size='small'
      >
        {children}
      </Modal>
  );
}