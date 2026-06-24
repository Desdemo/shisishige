import type { SVGProps } from "react"

type Props = SVGProps<SVGSVGElement> & { size?: number }

function Icon({ children, size = 16, viewBox = "0 0 256 256", ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="currentColor"
      {...props}
    >
      {children}
    </svg>
  )
}

export function MapPin({ size, ...props }: Props) {
  return (
    <Icon size={size} viewBox="0 0 256 256" {...props}>
      <path d="M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z" />
    </Icon>
  )
}

export function Camera({ size, ...props }: Props) {
  return (
    <Icon size={size} viewBox="0 0 256 256" {...props}>
      <path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z" />
    </Icon>
  )
}

export function PlayCircle({ size, ...props }: Props) {
  return (
    <Icon size={size} viewBox="0 0 256 256" {...props}>
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm36.44-94.66-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17Z" />
    </Icon>
  )
}

export function ArrowRight({ size, ...props }: Props) {
  return (
    <Icon size={size} viewBox="0 0 256 256" {...props}>
      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
    </Icon>
  )
}

export function ArrowLeft({ size, ...props }: Props) {
  return (
    <Icon size={size} viewBox="0 0 256 256" {...props}>
      <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
    </Icon>
  )
}

export function List({ size, ...props }: Props) {
  return (
    <Icon size={size} viewBox="0 0 256 256" {...props}>
      <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
    </Icon>
  )
}

export function X({ size, ...props }: Props) {
  return (
    <Icon size={size} viewBox="0 0 256 256" {...props}>
      <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
    </Icon>
  )
}

export function Envelope({ size, ...props }: Props) {
  return (
    <Icon size={size} viewBox="0 0 256 256" {...props}>
      <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,127,52.57,64ZM216,192H40V78.34l82.59,69.56a8,8,0,0,0,10.82,0L216,78.34V192Z" />
    </Icon>
  )
}

export function InstagramLogo({ size, ...props }: Props) {
  return (
    <Icon size={size} viewBox="0 0 256 256" {...props}>
      <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
    </Icon>
  )
}

export function ImageIcon({ size, ...props }: Props) {
  return (
    <Icon size={size} viewBox="0 0 256 256" {...props}>
      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM80,144a16,16,0,1,1,16,16A16,16,0,0,1,80,144Zm95.51,26.26a8,8,0,0,1-12.17,9.65L136,148.84,119.68,163.2l22.35,27.32a8,8,0,0,1-12.23,10L104,176.55,82.73,198.86a8,8,0,0,1-11.6-11l34-35.67a8,8,0,0,1,11.72,0L136,173.16l31.57-27.46a8,8,0,0,1,11.27.45Z" />
    </Icon>
  )
}
