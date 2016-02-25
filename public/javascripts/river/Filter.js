function mask(imageData1, imageData2, width)
{
    var pixel1 = imageData1.data;
    var pixel2 = imageData2.data;
    
    for (var i=0; i<pixel1.length; i+=4) 
    {
        if (pixel1[i+2] > 150 && pixel1[i+1] > 150 && pixel1[i] < 120)
        {
            pixel1[i+0] =  pixel2[i+0] * 0.8;
            pixel1[i+1] =  pixel2[i+1] * 0.8;
            pixel1[i+2] =  pixel2[i+2] * 0.8;
            
        }
    }
}