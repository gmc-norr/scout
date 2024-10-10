document.getElementById('exportButton_vcf').addEventListener('click', function(e) {
  e.preventDefault();
  
  const form = document.getElementById('variantForm');
  
  
  // VCF header
  let content = `##fileformat=VCFv4.2
  ##ALT=<ID=indel,Description="Insertions or deletions>
  ##ALT=<ID=INS,Description="Insertion">
  ##ALT=<ID=DUP,Description="Duplication">
  ##ALT=<ID=INV,Description="Inversion">
  ##ALT=<ID=BND,Description="Breakpoint">
  ##ALT=<ID=DEL,Number=.,Type=String,Description="Deletion">
  ##INFO=<ID=SVTYPE,Number=1,Type=String,Description="Type of structural variant">
  ##INFO=<ID=END,Number=1,Type=Integer,Description="End position of the variant">
  ##INFO=<ID=SVLEN,Number=1,Type=Integer,Description="Length of structural variant">  
  ##INFO=<ID=RANK,Number=1,Type=Float,Description="Rank Score">
  ##INFO=<ID=VRANK,Number=1,Type=Integer,Description="Variant Rank">
  ##INFO=<ID=CADD,Number=1,Type=Float,Description="CADD Score">
  ##INFO=<ID=HGNC,Number=.,Type=String,Description="HGNC Symbols">
  #\tCHROM\t\tPOS\t\tREF\t\tALT\t\t\tQUAL\t\tINFO\n`;
  
  const checkboxes = form.querySelectorAll('input[type="checkbox"]:checked');
  checkboxes.forEach(checkbox => {
    const row = checkbox.closest('tr');
    const cells = row.querySelectorAll('td');
    const displayName = cells[1].textContent;
    const [chrom, pos, ref, alt, type] = displayName.split('_');
    const end = cells[2].textContent;
    const length = cells[3].textContent;
    const sub_category = cells[4].textContent;
    const rankScore = cells[5].textContent;
    const variantRank = cells[6].textContent;
    const caddScore = cells[7].textContent;
    const hgncSymbols = cells[8].textContent;
    
    // VCF content
    content += `$\t${chrom}\t\t${pos}\xa0\t${ref}\t\t${alt};${sub_category}\t\tPASS\t\tSVTYPE=${type};END=${end};SVLEN=${length};RANK=${rankScore};VRANK=${variantRank};CADD=${caddScore};HGNC=${hgncSymbols}\n`;
  });
  
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8;' });
  const link = document.createElement('a');
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'variants.vcf');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});
