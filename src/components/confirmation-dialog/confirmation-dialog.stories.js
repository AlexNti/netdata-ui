import React from "react"
import { storiesOf } from "@storybook/react"
import { boolean } from "@storybook/addon-knobs"

import ConfirmationDialog from "./confirmation-dialog"

const Story = storiesOf("COMPONENTS|ConfirmationDialog")

Story.add("Confirmation dialog", () => {
  return (
    <ConfirmationDialog
      confirmLabel="Yes"
      declineLabel="Please don't!"
      handleConfirm={() => alert("Pressed confirm")}
      handleDecline={() => alert("Pressed decline")}
      isConfirmPositive={boolean("isConfirmPositive", false)}
      message="We are about to fulfill your request, there is no return from here. Are you sure?"
      title="Are you sure you want to proceed?"
    />
  )
})
