var config = {
    // first configure 'attachments' - where you'll store compiled pdfs and images
    // see './models.js' for more details 
    // also see 'mongoose-attachments' npm module
    attachments : {
	directory : "pdfs"
	, providerName : "s3"
	, key : "<your key here>"
	, secret : "<your secret here>"
	, bucket : "<your bucket here>"
    }
    , db : {
	url : "mongodb://localhost/flydb" // for example: mongodb://localhost/flydb3"
    }
};


// export the configurations
module.exports = config;