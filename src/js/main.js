// Import our custom CSS
import "../styles/style.scss";
import Swal from "sweetalert2";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import { coders } from "../../public/database.js";
import { whitForEach } from "./operations.js";

whitForEach(coders);
