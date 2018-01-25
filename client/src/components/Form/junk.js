

db.placesdb.insert({"name":"Dennys", rating:4.5, website: "https://99club",url:"https://Rest",review:"OKay", date: Date()})
<!-- Bootstrap core JavaScript -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/popper/popper.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- Plugin JavaScript -->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
    <script src="vendor/scrollreveal/scrollreveal.min.js"></script>
    <script src="vendor/magnific-popup/jquery.magnific-popup.min.js"></script>

    <!-- Custom scripts for this template -->
    <script src="js/creative.min.js"></script>

       <!-- favicon -->
const Form = props => (
  <form>
 
   <div className="form-group">
  
      <h4 className="text-center">
        <strong>Where do you Want to Go?</strong>
      </h4>
      
      <input
        className="form-control text-center pull-right"
        type="text"
        value={props.q}
        name="q"
        onChange={props.handleInputChange}
        required
      />

   
    <div className="text-center md-8">
 
      <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn btn-md btn-danger"
      >
        Submit
      </button>
    
    </div>

    </div>
  
  </form>
);

export default Form;
 




   <link rel="icon" type="image/png" href="img/dandelion2.png" sizes="32x32" />

       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/3.3.7/flatly/bootstrap.min.css"/>
Panel title="Weather">
          
              {this.state.weather.length ? (
             
                 <Div3>
                  {this.state.weather.map(weather => (
                    <Article
             
                      key={weather._id}
                      day={weather.day}
                      max_temp={weather.max_temp}
                     min_temp={weather.min_temp}
                     main={weather.main}
                    desc={weather.desc}
                     icon={weather.icon}
                                       />
                  ))}
                </Div3>
              ) : (
                <h2 className="text-center"> x</h2>
              )}
            </Panel>


            https://maps.googleapis.com/maps/api/place/textsearch/json?query=Los Angeles+C&type=lodging&key=AIzaSyBGxXK3pm9NbMHCeqa6TcdWJxzGfI2TwG4

 var queryText = location + "&type=lodging" + "&maxprice=" + price + "&rankby=prominence"