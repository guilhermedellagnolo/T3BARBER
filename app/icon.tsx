import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#eab308',
          borderRadius: '6px',
          fontWeight: 900,
          letterSpacing: '-0.5px',
          border: '1.5px solid #eab30840',
        }}
      >
        T3
      </div>
    ),
    {
      ...size,
    }
  )
}
