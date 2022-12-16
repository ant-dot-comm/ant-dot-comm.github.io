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