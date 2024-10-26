import ToggleButton from "./ToggleButton"

const Option = () => {
    return (
        <div className="mx-6 overflow-hidden">
            <img src='https://www.medyator.net/images/blog/20210803095405_0.png'
            className="w-100 h-200"
            />
            <div className='text-[#3c4d62] m-4'>Rezervasyon Seçenekleri</div>
            <div className="flex flex-row border">
                <div className="text-black border-r p-2">Giriş Tarihi</div>
                <div className="text-black p-2">11 09 2023</div>
            </div>
            <div className="flex flex-row border">
                <div className="text-black border-r p-2">Çıkış Tarihi</div>
                <div className="text-black p-2">14 09 2023</div>
            </div>
            <div className="flex flex-row border">
                <div className="text-black border-r p-2">Gece Sayısı</div>
                <div className="text-black p-2">3 Gece</div>
            </div>
            <div className="flex flex-row border">
                <div className="text-black border-r p-2">Ödeme Tipi</div>
                <div className="text-black p-2">Tamamını Ödeme</div>
            </div>
            <div className="flex justify-center m-5 p-2 border bg-gray-500">
                <button>Oda TUTARI: 21000₺</button>
            </div>
            <div className="flex justify-center m-2 p-2 border bg-green-500">
                <button>GENEL TOPLAM: 21000₺</button>
            </div>
            <div className="text-[#ffddb6] flex justify-center m-3 p-2">Taksit Tablosu için Tıklayınız</div>
            <div className="flex flex-row justify-center border m-3">
                <ToggleButton />
                <div className="text-[#8696aa]">Tatil İptal Güvencesi (+ ₺)</div>
            </div>
            <div className='text-[#3c4d62] m-4'>Fiyat İndirim / Artırım</div>
            <div className="flex flex-row p-2">
                <div className="flex flex-row border">
                    <div className="border-r bg-[#eeeeee]">İndirim</div>
                    <input
                        placeholder="Miktar TL"
                        className="mx-4"
                    />
                </div>
                <div className="flex flex-row border mx-6">
                    <div className="border-r bg-[#eeeeee]">Not</div>
                    <input
                        placeholder="Açıklama"
                        className="mx-4"
                    />
                </div>
            </div>
            <div className="flex flex-row p-2">
                <div className="flex flex-row border">
                    <div className="border-r bg-[#eeeeee]">Artırım</div>
                    <input
                        placeholder="Miktar TL"
                        className="mx-4"
                    />
                </div>
                <div className="flex flex-row border mx-6">
                    <div className="border-r bg-[#eeeeee]">Not</div>
                    <input
                        placeholder="Açıklama"
                        className="mx-4"
                    />
                </div>
            </div>
            <div className='text-[#3c4d62] m-4'>Transfer Hizmeti</div>
            <div className="flex flex-row justify-evenly border p-2 m-8">
                <div className="border-r">Ücret</div>
                <input
                placeholder="Transfer Seçin"
                className="border-r"
                />
                <button className="bg-[#3279b7] text-[#d9e5f1]">Transferler</button>
            </div>
            <div className="flex justify-center m-2 p-2 border bg-[#5bc0de] border-[#3279b7]">
                <button>Tutar Hesapla</button>
            </div>
            <div className="flex justify-center m-2 p-2 border bg-[#3279b7] border-[#3279b7]">
                <button>Rezervasyon Güncelle</button>
            </div>
        </div>
    )
}

export default Option