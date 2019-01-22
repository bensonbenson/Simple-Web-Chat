import identifier_json from "./identifier.json"

export let WEBSOCKET_URL;
if (identifier_json.environ === "local") {
    WEBSOCKET_URL = "http://localhost:3000";
} else {
    WEBSOCKET_URL = "http://bebe.group:8080";
}
