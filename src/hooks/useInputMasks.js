export default function useInputMasks(){
  function formatPhone(value){
    if(!value) return ''
    let v = value.replace(/\D/g,'')
    v = v.replace(/^(\d{2})(\d)/g,'($1) $2')
    v = v.replace(/(\d)(\d{4})$/,'$1-$2')
    return v
  }

  function formatCPF(value){
    if(!value) return ''
    let v = value.replace(/\D/g,'').slice(0,11)
    v = v.replace(/(\d{3})(\d)/,'$1.$2')
    v = v.replace(/(\d{3})(\d)/,'$1.$2')
    v = v.replace(/(\d{3})(\d{1,2})$/,'$1-$2')
    return v
  }

  return { formatPhone, formatCPF }
}
