from flask import Flask
from flask import url_for
from flask import request, jsonify
from escpos.printer import File
import json
import re
import fpdf
import os

app=Flask(__name__)
p=File('/dev/usb/lp0')

@app.route("/")
def tervitus():
  print("tervitati")
  return "tere"


@app.route("/kirjuta2", methods=['POST'])
def kirjuta2():
  obj=request.json["sisu"]
#  return "abc"  + muuda1(obj["poem"])
#  return muuda2(obj["title"])
#  return muuda2(obj["author"])
  p.text(muuda2(obj["title"]))
  p.text('\n')
  p.text(muuda1(obj["poem"]))
  p.text('\n')
  p.text(muuda2(obj["author"]))
  p.cut();
  p._raw(bytearray([27, ord('C'), 0]))
  return "kohal "

@app.route("/kirjuta3", methods=['POST'])
def kirjuta3():
  import fpdf
  import os
  obj=request.json["sisu"]
  pdf = fpdf.FPDF()
  pdf.add_page();
  pdf.add_font('DejaVu', '', 'DejaVuSansCondensed.ttf', uni=True)
  pdf.set_font('DejaVu', '', 8)
  pdf.set_left_margin(-0.2)

#  pdf.set_font('Arial','B',12);
  pdf.write(5, request.json["aeg"])
  pdf.write(5, request.json["juhis"])
  pdf.write(5, request.json["kes"])
  pdf.ln(10)
  pdf.write(5, muuda2(obj["title"]))
  pdf.ln(10)
  pdf.write(5, muuda1(obj["poem"]))
  pdf.ln(5)
  pdf.write(5, muuda2(obj["author"]))
  pdf.ln(10)
  pdf.write(5, muuda1(request.json["juhis2"]))
  pdf.ln(10)
  pdf.write(5, muuda1(request.json["juhis3"]))


  pdf.output("f5.pdf")
  os.system("lp f5.pdf")
  return "aa3"
  obj=request.json["sisu"]
  pdf = fpdf.FPDF()
  pdf.add_page();
  pdf.set_font('Arial','B',12);
  pdf.write(5, "kuku")
  print(request.json["kes"])
  pdf.write(5, request.json["juhis"])
  pdf.write(5, request.json["kes"])
  pdf.ln(10)
  pdf.write(5, muuda2(obj["title"]))
  pdf.ln(10)
  pdf.write(5, muuda1(obj["poem"]))
  pdf.write(5, muuda2(obj["author"]))
  pdf.ln(10)
  pdf.write(5, muuda1(request.json["juhis2"]))
  pdf.ln(10)
  pdf.write(5, muuda1(request.json["juhis3"]))
  pdf.output("f4.pdf")
  return "kolm"
  os.system("lp f4.pdf")
  return "valmis"



def muuda1(tekst):
  tekst=tekst.replace("<br><br>", "<br>")
  tekst=tekst.replace("\n", " ")
  tekst=re.sub("[ ]+", " ", tekst)
  return tekst.replace("<br>", "\n")

def muuda2(tekst):
  return re.sub("<span class=\"[a-z]+\">([^<]*)</span>", "\\1", tekst)
