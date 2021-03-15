$(function() {
	$(".coords").mouseenter(function() {
		console.log("Mouse entrou no retângulo.");
		$(".valores").fadeIn("fast");
	});

	$(".coords").mousemove(function(e) {
		console.log(e.clientX, e.clientY);
		var pos = $(this).offset();
		var x = e.clientX - pos.left;
		var y = e.clientY - pos.top;
		$(".valores").html(`X: ${x}; Y: ${y}`);
	});

	$(".coords").mouseout(function() {
		console.log("Mouse saiu do retângulo.");
		$(".valores").fadeOut("fast");
	});
});
