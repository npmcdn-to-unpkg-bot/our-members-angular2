Imports DevExpress.XtraReports.UI
Imports OrganisationManager.Reminder

Imports OrganisationManager.GroupFunctions
Imports OrganisationManager.BankAccountModule
Imports OrganisationManager.TransactionList
Imports System.Web.Script.Serialization
Imports OrganisationManager.BankReconciliationModule
Imports OrganisationManager.ExpenseModule
Imports OrganisationManager.DepositModule
Imports OrganisationManager.EventFunctions
Imports OrganisationManager.ReceiptFunctions
Imports OrganisationManager.GlobalFunctions
Imports OrganisationManager.AddressLabelFunctions
Imports OrganisationManager.OrganisationMemberStatement
Imports System.IO
Imports System.Drawing

Public Class DisplayHelpFile
    Inherits System.Web.UI.Page

    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load
        Try
            If Not IsPostBack Then
                Dim Functionality As String = CStr(Request.Params("Functionality"))
                Select Case Functionality
                    Case "UserGuide"
                        DisplayUserGuide()
                    Case "HelpFile"
                        DisplayHelpFile()
                End Select
            End If
        Catch ex As Exception
            SaveError(ex, True)
        End Try
    End Sub
    Sub DisplayUserGuide()
        Try
            Dim FilePath As String = "~/HelpFiles/iB2 User Guide.pdf"
            Dim b As Byte() = System.IO.File.ReadAllBytes(FilePath)
            Dim fileName As String = Path.GetFileName(FilePath)
            Dim extension As String = Path.GetExtension(fileName)
            WriteByteArrytoResponse(Response, extension, b, fileName)
        Catch ex As Exception
            SaveError(ex, True)
        End Try
    End Sub
    Sub DisplayHelpFile()
        Try
            Dim HelpFileName As String = CStr(Request.Params("HelpFileName"))
            Dim FilePath As String = Request.ServerVariables("APPL_PHYSICAL_PATH")
            FilePath = FilePath & "HelpFiles/" & HelpFileName
            Dim b As Byte() = System.IO.File.ReadAllBytes(FilePath)
            'Dim fileName As String = Path.GetFileName(FilePath)
            Response.Clear()
            Response.ContentType = "application/pdf"
            Response.AppendHeader("Content-Length", b.Length.ToString())
            Response.BinaryWrite(b)
        Catch ex As Exception
            SaveError(ex, True)
        End Try
    End Sub

End Class