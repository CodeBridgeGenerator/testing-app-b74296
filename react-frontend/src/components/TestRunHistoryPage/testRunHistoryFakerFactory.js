
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
ServiceName: faker.lorem.sentence(""),
TestName: faker.lorem.sentence(""),
TestStatus: faker.lorem.sentence(""),
ExecutionDateTimeundefined: faker.lorem.sentence(""),
ExecutedBy: faker.lorem.sentence(""),
ErrorType: faker.lorem.sentence(""),
ErrorMessage: faker.lorem.sentence(""),
FileLocation: faker.lorem.sentence(""),
FailureLineNumber: faker.lorem.sentence(""),
StackTrace: faker.lorem.sentence(""),
ExecutionDuration: faker.lorem.sentence(""),
Priority: faker.lorem.sentence(""),
RetryCountundefined: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
