import React from 'react'

export const Container = (Component:Function) => {
  return (props: any) => {
    const {
      error = null,
      pending = false,
      data,
      filter: {
        id: filterId = null,
        key: filterKey = null
      } = {}
    } = props
    let feedData = [...data]

    if (error) {
      return <Error/>
    }

    if (filterId && filterKey) {
      const parsedFilterId = (typeof filterId) === 'string' ? parseInt(filterId) : filterId
      feedData = feedData.filter((dataItem) => {
        const parsedId =
          typeof (dataItem[filterKey]) === 'string'
            ? parseInt(dataItem[filterKey])
            : dataItem[filterKey]

        return parsedId === parsedFilterId
      })
    }

    return (
      <div>
        {
          pending ? (
            <Pending/>
          ) : (
            feedData.map((item: any) => {
              return <Component { ...item } key={item.id}/>
            })
          )
        }
      </div>
    )
  }
}

const Pending = () => (
  <div>
    ...Fetching data
  </div>
)

const Error = () => (
  <div>
    ...Error fetching data
  </div>
)
