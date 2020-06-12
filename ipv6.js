function getIpv4MappedIpv6Address(ipv4) {

  // Initialize return argument
  let ipv4Address = null;
  
  // Prepare to derive a Hex version of the dotted-quad decimal IPv4 address.
  // Split the IPv4 address into its four parts.
  let ipv4Quads = ipv4.split('.');
  // Count the number of parts found.
  let numIpv4Segments = ipv4Quads.length;

  // Verify IPv4 had four parts.
  if (numIpv4Segments === 4) {
    let validQuads = true;
    // Iterate over the IPv4 address parts and verify each segment was a number between 0 and 255.
    for(let i=0; i < numIpv4Segments; i++) {
      if( isNaN(Number(ipv4Quads[i])) || ipv4Quads[i] < 0 || ipv4Quads[i] > 255 ) {
        validQuads = false;
      }
    }
    module.exports.getIpv4MappedIpv6Address = getIpv4MappedIpv6Address;