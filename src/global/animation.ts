type Islide = {
    x: string
    opacity: number
  }

export const slideAnimation = {
    enter: (direction: number): Islide => {
      return {
        x: direction > 0 ? '100%' : '-100%',
        opacity: 0,
      }
    },
    center: {
      x: '0%',
      opacity: 1,
    },
    exit: (direction: number): Islide => {
      return {
        x: direction < 0 ? '100%' : '-100%',
        opacity: 0,
      }
    },
  }