// external dependencies
import React, { FC, useEffect } from 'react'

// internal dependencies
import { Component, List } from './Updates.styles'
import { StatusProps } from '@/utils/types/StatusProps'

// types
interface UpdatesProps {
  status: StatusProps;
}

const Updates: FC<UpdatesProps> = ({ status }) => {
  const showUpdates = () => {
    const listChildrenArray = Array.from(document.querySelector(".updates")!.children)

    listChildrenArray.forEach((element, index) => {
      const isFirstChild = (index === 0)
      const isNotFirstChild = (index >= 1)
      const isLastChild = (index === listChildrenArray.length - 1)

      const showElement = ( item : any ) => { item.setAttribute('class', 'is-visible') }
      const hideElement = ( item : any ) => { item.removeAttribute('class') }

      if (isLastChild) {
        hideElement(element)
      }
      
      if (isFirstChild) {
        showElement(element)
      }

      setTimeout(function() {
        const previousElement = element.previousSibling

        if (isNotFirstChild) {
          hideElement(previousElement)
          showElement(element)
        }
      }, (index * 5000))
    })
  }

  const repeatUpdates = () => {
    const listChildrenArray = Array.from(document.querySelector(".updates")!.childNodes)

    setInterval(() => {
      showUpdates()
    }, (listChildrenArray.length * 5000))
  }

  useEffect(() => {
    showUpdates()
    repeatUpdates()
  });

  return (
    <Component>
      <List className="updates">
        {status.listening &&
          <li className="is-visible">
            {`🎶 Listening: ${status.listening}`}
          </li>
        }
        {status.learning && 
          <li>{`📖 Learning: ${status.learning}`}</li>
        }
        {status.watching &&
          <li>{`📺 Watching: ${status.watching}`}</li>
        }
        {
          status.location && 
          <li>{`📍 ${status.location}`}</li>
        }
        {status.watchedMovie && 
          <li>{`🎬 Last Movie: ${status.watchedMovie}`}</li>
        }
        {status.playing && 
          <li>{`🎮 Playing: ${status.playing}`}</li>
        }
      </List>
    </Component>
	);
};

export default Updates;
