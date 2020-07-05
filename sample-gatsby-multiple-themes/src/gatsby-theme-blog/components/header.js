import React from "react"
import { css } from "theme-ui"
import Navigation from "../../components/navigation"

export default function Header() {
  return (
    <header>
      <div
        css={css({
          maxwidth: `container`,
          mx: `auto`,
          px: 3,
          pt: 4,
        })}
      >
        <Navigation />
      </div>
    </header>
  )
}