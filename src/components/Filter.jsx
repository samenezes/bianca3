import React from 'react'

const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className='filter'>
        <h2>Filtrar:</h2>
        <div className='filter-options'>
            <div>
                <p>Status</p>
                <select value={filter} onChange={(e) => setFilter(e.target.value)}> {}
                    <option value="All">Todas</option>
                    <option value="Quente">Quente</option>
                    <option value="Fria">Fria</option>
                </select>
            </div>
            
        </div>
    </div>
  )
}

export default Filter