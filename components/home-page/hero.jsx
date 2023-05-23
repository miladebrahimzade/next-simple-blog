import Image from 'next/image'
import classes from './hero.module.css'

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/milad.png'
          alt='Profile Image'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I`m Milad</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit error
        eveniet magni.
      </p>
    </section>
  )
}

export default Hero
