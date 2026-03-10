# Phan tich CSS Priority

## Cau 1: Selector nao co do uu tien cao nhat trong CSS?

Selector co do uu tien cao nhat trong bai nay la inline style (style viet truc tiep trong the HTML), neu khong co !important o noi khac.

## Cau 2: Neu mot phan tu HTML co ca h1, .title, va #main cung set color - selector nao thang? Tai sao?

#main thang vi id selector co do uu tien cao hon class selector (.title) va tag selector (h1).

## Cau 3: Neu ban them style="color: pink" truc tiep vao phan tu o Cau 2, ket qua thay doi nhu the nao?

Khi them inline style, mau cuoi cung se la pink vi inline style co do uu tien cao hon id, class va tag.

## Cau 4: Tai sao theme.css co the override style tu base.css? Dieu kien de override thanh cong la gi?

Theme.css co the override base.css vi duoc link sau base.css trong HTML.
Dieu kien de override thanh cong:

- Rule trong theme.css phai ap dung dung vao phan tu do.
- Rule moi co do uu tien cao hon, hoac cung do uu tien nhung duoc khai bao sau.

## Cau 5: Trong project cua ban, co hai phan tu deu dung class .title nhung hien thi mau khac nhau. Giai thich tai sao.

Vi du trong HOME PAGE:

- h1 class="title" id="main" co them #main nen mau theo id #main.
- h2 class="title" khong co id nen mau theo .title (theme.css).
  Do do ca hai deu co .title nhung mau khac nhau do khac do uu tien selector.

## Cau 6: Phan tu nao trong project cua ban co CSS phuc tap nhat? Liet ke cac selector tac dong len no va giai thich selector nao thang cuoi cung.

Phan tu phuc tap nhat la:

- Dashboard: h1 class="title" id="special" style="color: aqua"

Cac selector tac dong:

- External CSS (base.css): h1, .title, #special
- External CSS (theme.css): .title, #special
- Internal CSS (dashboard/index.html): h1.title, h1.title#special
- Inline CSS: style="color: aqua"

Selector thang cuoi cung la inline style, nen mau hien thi cuoi la aqua.
