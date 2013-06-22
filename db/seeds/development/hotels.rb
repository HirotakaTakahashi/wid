#coding utf-8

fnames = ["Hilton", "Okura", "Ritz", "Westin", "California"]
gnames = ["Hotel", "Villa", "Tokyo", "Onsen"]
0.upto(9) do |idx|
  Hotel.create(
    url: "#{fnames[idx % 5]}_#{gnames[idx % 4]}",
    name: "#{fnames[idx % 5]} #{gnames[idx % 4]}",
    thumbnail:"http://australia.vc/#{fnames[idx % 5]}.jpg",
    address: "1-2-#{idx} minatoku tokyo apan",
    lat:35.693047 - idx*0.005,
    lng:139.691073 + idx*0.005
    )
end