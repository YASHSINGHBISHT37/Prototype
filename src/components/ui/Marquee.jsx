import { useRef, useEffect } from 'react'
import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from 'motion/react'

const trailImages = [1, 2, 3, 4, 5, 6]

export default function Marquee({
    baseVelocity = 3,
    boostVelocity = 40,
    decay = 0.94,
    speedd = 4000,
    direction = 'top',
}) {
    const baseY = useMotionValue(0)
    const initialDirection = direction === 'bottom' ? 1 : -1
    const directionFactor = useRef(initialDirection)
    const boost = useRef(0)
    const touchStartY = useRef(0)

    const y = useTransform(baseY, (v) => `${wrap(-33.333, 0, v)}%`)

    useEffect(() => {
        directionFactor.current = direction === 'bottom' ? 1 : -1
    }, [direction])

    useEffect(() => {
        const applyScroll = (deltaY) => {
            const scrollSign = deltaY > 0 ? -1 : 1
            directionFactor.current = initialDirection * scrollSign
            boost.current = Math.min(boost.current + Math.abs(deltaY) * 0.15, boostVelocity)
        }

        const handleWheel = (e) => applyScroll(e.deltaY)
        const handleTouchStart = (e) => { touchStartY.current = e.touches[0].clientY }
        const handleTouchMove = (e) => {
            const currentY = e.touches[0].clientY
            applyScroll(touchStartY.current - currentY)
            touchStartY.current = currentY
        }

        window.addEventListener('wheel', handleWheel, { passive: true })
        window.addEventListener('touchstart', handleTouchStart, { passive: true })
        window.addEventListener('touchmove', handleTouchMove, { passive: true })
        return () => {
            window.removeEventListener('wheel', handleWheel)
            window.removeEventListener('touchstart', handleTouchStart)
            window.removeEventListener('touchmove', handleTouchMove)
        }
    }, [boostVelocity, initialDirection])

    useAnimationFrame((t, delta) => {
        const dt = delta / speedd
        const speed = baseVelocity + boost.current
        baseY.set(baseY.get() + directionFactor.current * speed * dt)
        boost.current *= Math.pow(decay, delta / 10)
    })

    const items = [...trailImages, ...trailImages, ...trailImages]

    return (
        <div className="h-full overflow-hidden gap-">
            <motion.div className="flex flex-col items-center h-max gap-2" style={{ y }}>
                {items.map((num, i) => (
                    <div key={i} className="flex flex-col items-center border border-black/20 rounded-2xl group backdrop-blur-2xl overflow-hidden bg-black/3">
                        <img src={`/favicon/2.png`} className="w-60 aspect-square relative z-9" />
                        <div className={`w-full aspect-square bg-[#fe330a]/80 fixed ${direction}-30 rounded-full left-0 z-1 blur-[2vh] group-hover:${direction}-0 transition-all duration-500 ease-in-out`}></div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}