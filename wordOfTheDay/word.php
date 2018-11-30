<?php
include("top.html");
$WORD_FILENAME = "words.txt";

#read a random word line from disk and display its text
function read_random_word(){
    global $WORD_FILENAME;
    $lines = file($WORD_FILENAME);
    $random_index = rand(0, count($lines) -1);
    $random_line = $lines[$random_index];
    $tokens = explode("\t", $random_line);
    list($word, $part, $definition) = $tokens;
    ?>

    <blockquote>
        <p>
        <?= $word ?> - 
            <span class ="partofspeech"><?= $part ?></span>. <br />
            <?= $definition ?>
        </p>
    </blockquote>
    
    <?php
}
?>
        <div>
            <?php
            for($row = 1; $row <= 2 ;  $row++){
                for($col = 1; $col <= 3; $col++){
                    ?>
                    <img src="vocab.jpg" alt="Vocab Girl" />
                    <?php
                }
                ?>
                <br />
                <?php
            }
            ?>
        </div>

        <p>Your word of the day is:</p>
        <?php
            read_random_word();
        ?>
    </body>
</html>