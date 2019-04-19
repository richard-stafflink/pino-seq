import * as Pino from "pino"
import * as PinoSeq from ".."


const stream = PinoSeq.createStream({serverUrl: "http://localhost:5341"});

const options: Pino.LoggerOptions = {
  name: "pino-seq example"
}
const logger: Pino.Logger = Pino(options, stream);

logger.info("Hello Seq, from Pino");

const frLogger = logger.child({lang: "fr"});
frLogger.warn("au reviour");
