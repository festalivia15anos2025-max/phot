module.exports = function handler(req, res) {
  const hasEmail = !!process.env.GOOGLE_CLIENT_EMAIL;
  const hasKey = !!process.env.GOOGLE_PRIVATE_KEY;
  const emailValue = process.env.GOOGLE_CLIENT_EMAIL;
  const keyStart = process.env.GOOGLE_PRIVATE_KEY?.substring(0, 50);
  
  res.status(200).json({ 
    hasEmail,
    hasKey,
    email: emailValue,
    keyPreview: keyStart,
    message: 'Se hasEmail e hasKey forem false, as variáveis não estão configuradas'
  });
};
```

Depois acesse:
`https://phot-ndy6-8slc1auq3-luiss-projects-dd95b5ed.vercel.app/api/test`

---

## 🔧 Provavelmente o problema é:

As **variáveis de ambiente** não estão configuradas corretamente. Vamos refazer:

### Passo 1: Deletar as variáveis antigas

1. No Vercel, vá em **Settings** → **Environment Variables**
2. **Delete** as duas variáveis existentes (`GOOGLE_CLIENT_EMAIL` e `GOOGLE_PRIVATE_KEY`)

### Passo 2: Adicionar novamente (com cuidado)

**Variável 1:**
- **Key**: `GOOGLE_CLIENT_EMAIL`
- **Value**: Cole o email da conta de serviço (do arquivo credentials.json)
  - Exemplo: `festa-livia-uploader@festa-livia-15anos.iam.gserviceaccount.com`
- **Environments**: Marque **Production**, **Preview** e **Development** (todas!)
- Clique em **Add**

**Variável 2:**
- **Key**: `GOOGLE_PRIVATE_KEY`
- **Value**: Cole a chave privada COMPLETA (incluindo BEGIN e END)
  
⚠️ **IMPORTANTE**: A chave deve estar exatamente assim:
```
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAAS...
(várias linhas)
...xxxxx
-----END PRIVATE KEY-----
