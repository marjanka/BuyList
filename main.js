//console.log("hi");
$(function(){

var template = $(".row-template").html();
var bl_need_template = $(".need-template").html();
var already_bought_template = $(".bought-template").html();
 // console.log(template); 
 // console.log(bl_need_template); 
 // console.log(already_bought_template); 
 var $blList =$(".bl-list");
 var $input =$(".bl-add");

 function addOneItem(name){

 // variables
var quantity =1;
var $node =$(template);
var $need_node = $(bl_need_template);
var $bought_node = $(already_bought_template);
var $plus =$node.find(".bl-plus");
var $minus =$node.find(".bl-minus");
var $blLabel =$node.find(".bl-label");
var $del =$node.find(".bl-delete");
var $bought =$node.find(".bl-ok");
var $unBought =$node.find(".bl-unBought");
var $inputProd=$node.find(".item-title");
var $product =$node.find(".item");

//initialization 
$inputProd.val(name);
$product.click(changeNameOfProduct);
$minus.click(minusOne);
$plus.click(plusOne);
$del.click(Delete);
$bought.click(boughtItem);
$unBought.click(unBoughtItem);
$inputProd.focusout(newName);
$minus.disabled= true;
$node.addClass("firstName");
$node.addClass("stateNonBought");
$need_node.addClass("stateNonBought");
$bought_node.addClass("stateNonBought");
$blList.append($node);
$(".bl-need").append($need_node);
$(".already-bought").append($bought_node);
$blLabel.text(1);
$node.find(".item").text(name);
$need_node.find(".bl-item").text(name);
$bought_node.find(".bl-item").text(name);

//functions
function plusOne(){
	$minus.disabled= false;
	quantity++;
	$blLabel.text(quantity)
	$need_node.find(".need-to-buy").text(quantity);
	$bought_node.find(".need-to-buy").text(quantity);
}

function minusOne(){
	if(quantity===1){
		$minus.disabled= true;
	}else{
		$minus.disabled= false;
		quantity--;
		$blLabel.text(quantity);
		$need_node.find(".need-to-buy").text(quantity);
		$bought_node.find(".need-to-buy").text(quantity);
	}
}

function Delete(){
	$node.remove();
	$need_node.remove();
	$bought_node.remove();
}

function boughtItem(){
	$node.addClass("stateBought");
	$node.removeClass("stateNonBought");
	$need_node.addClass("stateBought");
	$need_node.removeClass("stateNonBought");
	$bought_node.addClass("stateBought");
	$bought_node.removeClass("stateNonBought");
}

function unBoughtItem(){
	$node.removeClass("stateBought");
	$node.addClass("stateNonBought");
	$need_node.removeClass("stateBought");
	$need_node.addClass("stateNonBought");
	$bought_node.removeClass("stateBought");
	$bought_node.addClass("stateNonBought");
}

function changeNameOfProduct(){
	$node.addClass("editedName");
	$node.removeClass("firstName");
	$inputProd.focus();
}

function newName() {
	$node.removeClass("editedName");
	$node.addClass("firstName");
	var text = $inputProd.val();
	$product.text(text);
	$need_node.find(".bl-item").text(text);
	$bought_node.find(".bl-item").text(text);
}

}

$(".btn-add").click(inputNewProduct);

function inputNewProduct () {
	var text = $input.val();
	if (text.length>0) {
		addOneItem(text);
		$input.val("");
		$input.focus();
	}
}
$input.on('keypress', function (e) {
	if(e.keyCode === 13){
          e.preventDefault(); // Ensure it is only this code that rusn
          inputNewProduct();
      }
  });

addOneItem("Tomatoes");
addOneItem("Cheese");
addOneItem("Cookies");
});



