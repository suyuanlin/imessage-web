/**
 * 
 */
function toJson(j) {
	return (new Function("return " + j))();
}