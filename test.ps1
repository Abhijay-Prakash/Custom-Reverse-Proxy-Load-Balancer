for ($i = 1; $i -le 1000; $i++) {
    $response = Invoke-WebRequest -Uri "http://localhost:9001/" -UseBasicParsing
    Write-Host $response.Content
}
