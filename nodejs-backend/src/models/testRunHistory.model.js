
    module.exports = function (app) {
        const modelName = 'test_run_history';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            ServiceName: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
TestName: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
TestStatus: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
ExecutionDateTimeundefined: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
ExecutedBy: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
ErrorType: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
ErrorMessage: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
FileLocation: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
FailureLineNumber: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
StackTrace: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
ExecutionDuration: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
Priority: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
RetryCountundefined: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };