import React, { Fragment } from "react"
import { Styled } from "theme-ui"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  return (
    <Fragment>
      This is where <Styled.a href="http://example.com/">your name</Styled.a>
      {` `}
      goes.
      <br />
      It's shadowing the content from the theme.
    </Fragment>
  )
}
