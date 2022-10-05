import PropTypes from 'prop-types'
import { ReactElement } from 'react'
import FooterComponent from './FooterComponent'
import HeaderComponent from './HeaderComponent'

interface LayoutComponentProps {
  children: any
}

export default function LayoutComponent({
  children,
}: LayoutComponentProps): ReactElement {
  return (
    <>
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  )
}

LayoutComponent.defaultProps = {
  children: PropTypes.node.isRequired,
}
