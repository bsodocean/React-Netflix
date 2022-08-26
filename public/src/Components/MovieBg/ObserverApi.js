import React from 'react'

export default function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = React.useState(false)
  
    const options = {
      threshold: 0.3,
    };
  
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      options
    );
  
    React.useEffect(() => {
      observer.observe(ref.current)
      // Remove the observer as soon as the component is unmounted
      return () => { observer.disconnect() }
    }, [])
  
    return isIntersecting
}