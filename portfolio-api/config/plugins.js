module.exports = ({ env }) => ({
	"location-field": {
		enabled: true,
		config: {
			// fields: ["formatted_address"], // optional
			// You need to enable "Autocomplete API" and "Places API" in your Google Cloud Console
			googleMapsApiKey: env("GOOGLE_MAPS_API_KEY"),
      autocompletionRequestOptions: {
        language: 'nl',
        locationBias: 'IP_BIAS',
      },
			// See https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest
		},
	},
	// .. your other plugin configurations
});
