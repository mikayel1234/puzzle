$(document).ready(function(){//htmli-n sargeluc heto cragir@ ashxati
var puzzels=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0];//uxxaki zangvac
puzzels=shuffle(puzzels);// shuffle funkcia a vor@ mix a anum
var finaly=[
			[1,2,3,4],//verjnakan tesq@ ayspes petqe lni,heto stugelu e
			[5,6,7,8],
			[9,10,11,12],
			[13,14,15,0]
		];
function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;////minchev estex mix e anum
}
var matrix=[];// matrica a stexcum
var arr=[];
for(var i=0;i<puzzels.length;i++)
{
	if(i%4==0&&i!=0)
	{
		matrix.push(arr);
		arr=[];
	}
	
	arr.push(puzzels[i]);
	if(i==puzzels.length-1)
	{
		matrix.push(arr);
		arr=[];
	}//minchev estex
}
function matrix1()//matrix 1 funkcian tesaneli e darznum nkarner@
{
	$("<div/>").attr("class","a").prependTo("body").css({"display":"inline-block"});
	
for(var i=0;i<matrix.length;i++)
{
	for(var j=0;j<matrix[i].length;j++)
	{
		if(matrix[i][j]!=0)
		{
			
			$("<img/>").attr("class","sd").attr("src",'images/'+matrix[i][j]+".gif").appendTo(".a");
			
			
		}
		else
		{
			$("<img/>").attr("class","sd1").attr("src",'images/'+matrix[i][j]+".gif").appendTo(".a");
		}
		
	}
	$("<br>").appendTo(".a");
}
}
matrix1();
$(".sd,.sd1").click(function(){//jquery -i nshann e 
	
	var number =$(this).attr("src");//click arac nkari anunne imanum
	if(number.length==12)
	{
		number=number.substring(7,8);
	}
	else
	{
		number=number.substring(7,9);
	}
	var x,y;
	for(var i=0;i<matrix.length;i++)
	{
		for(var j=0;j<matrix[i].length;j++)
		{
			if(matrix[i][j]==number)
			{
				y=i;
				x=j;
				break;
			}
			
		}
	}
	var s1=0;
	var s2=0;
	var s3=0;
	var s4=0;
		if(y-1==-1)
		{
			s1=1;
		}
		else if(y+1==4)
		{
			s2=1;
		}
		if(x-1==-1)
		{
			s3=1;
		}
		else if(x+1==4)
		{
			s4=1;
		}
		if(s1!=1&&matrix[y-1][x]==0)
		{
			matrix[y-1][x]=matrix[y][x];
			$(".sd1").attr("src","images/"+matrix[y][x]+".gif").attr("class","sd");
			$(this).attr("src","images/"+0+".gif").attr("class","sd1");
			matrix[y][x]=0;
			
		}
		else if(s2!=1&&matrix[y+1][x]==0)
		{
			matrix[y+1][x]=matrix[y][x];
			$(".sd1").attr("src","images/"+matrix[y][x]+".gif").attr("class","sd");
			$(this).attr("src","images/"+0+".gif").attr("class","sd1");
			matrix[y][x]=0;
			
			
		}
		else if(s3!=1&&matrix[y][x-1]==0)
		{
			matrix[y][x-1]=matrix[y][x];
			$(".sd1").attr("src","images/"+matrix[y][x]+".gif").attr("class","sd");
			$(this).attr("src","images/"+0+".gif").attr("class","sd1");
			matrix[y][x]=0;
			
			
		}
		else if(s4!=1&&matrix[y][x+1]==0)
		{
			matrix[y][x+1]=matrix[y][x];
			$(".sd1").attr("src","images/"+matrix[y][x]+".gif").attr("class","sd");
			$(this).attr("src","images/"+0+".gif").attr("class","sd1");
			matrix[y][x]=0;
			
		
		}
		var bool="true";
		for(var h=0;h<matrix.length;h++)
		{
			for(var q=0;q<matrix[h].length;q++)
			{
				if(matrix[h][q]!=finaly[h][q])
				{
					bool="false";
				}
			}
		}
		if(bool=="true")
		{
			alert("You win");
			location.reload();
		}
		console.log(matrix);
	
});

});