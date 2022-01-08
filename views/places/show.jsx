const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className="row">
              <div className="col-sm-6">
                <img src={data.place.pic} alt={data.place.name} />
                <h3>
                  Located in {data.place.city}, {data.place.state}
                </h3>
              </div>
              <div className="col-sm-6">
                <h1>{ data.place.name }</h1>
                
                <br />
                <h2>
                  Description
                </h2>
                
                <h4>
                  Serving {data.place.cuisines}
                </h4>
                <br />
                <a href={`/places/${data.index}/edit`} className="btn btn-warning">
                  Edit
                </a>{` `}
                <form method="POST" action={`/places/${data.index}?_method=DELETE`}>
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form>
              </div>
            </div>
            <hr />
            
            
          </main>
        </Def>
    )
}

module.exports = show