var Parcel =function(){
	var name ="privateName";
	var Content= function(){
		var value = 11;
		this.value = function(){
			return arguments;
		};
		this.name = function(){
			return name;
		};
	}
	
	this.ship = function(){
		var c = new Content();
		alert(c.value());
	}
	
	this.getContent =function(){
		return new Content();
	}
	
}
/*访问不到Content,外部不可能访问
var c = new Content();
c.value(); 
 * */
/**
 *通过在Parcel中增加一个外部方法，返回一个内部类的引用，然后外面就可以访问内部类了
 *返回的内部类可以访问parcel中的私有变量。也就是说content有一个指向外部类的引用。
 */

var p = new Parcel();
//p.ship();
var content = p.getContent();
alert(content.value());
alert(content.name());